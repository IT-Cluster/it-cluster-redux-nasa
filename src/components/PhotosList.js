import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPhotos} from '../api/photosApi';
import Photo from './Photo';
import NoData from './NoData';
import Loader from './Loader';
import Error from './Error';

function dateToYMD(date) {
    var d = date.getDate();
    var m = date.getMonth() + 1; //Month from 0 to 11
    var y = date.getFullYear();
    return `${y}-${m}-${d}`;
}

class PhotosList extends Component {
    constructor(props) {
        super(props);
        this.loadPhotos = this.loadPhotos.bind(this);
        this.loadNextPage = this.loadNextPage.bind(this);
        this.loadInitialPage = this.loadInitialPage.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        let date = new Date();
        date.setDate(date.getDate() - 1);
        this.state = {
            page: 1,
            date: dateToYMD(date)
        }
    }

    componentDidMount() {
        this.loadInitialPage();
    }

    loadPhotos() {
        getPhotos(this.state.page, this.state.date);
    }

    loadInitialPage() {
        this.setState(
            prevState => ({page: 1}),
            () => {
                this.loadPhotos();
            });
    }

    loadNextPage() {
        this.setState(
            prevState => ({page: prevState.page + 1}),
            () => {
                this.loadPhotos();
            });
    }

    handleDateChange(e) {
        this.setState({
            date: e.target.value
        });
    }

    showPhotos() {
        const {data, loading, error} = this.props.photos;
        if (error) {
            return <Error message={error}/>;
        }
        if (!data.length) {
            return <NoData/>;
        }
        return (
            <>
                {loading && <Loader/>}
                <div className="row">
                    {data.map(photo => <Photo key={`photo-${photo.id}`} photo={photo}/>)}
                </div>
            </>
        );
    }

    render() {
        console.log(this.props);
        return (
            <>
                <div className="row">
                    <div className="col-6">
                        <div className="form-group row">
                            <label htmlFor="date" className="col-6 col-form-label">Земна дата:</label>
                            <div className="col-6">
                                <input
                                    type="text"
                                    id="date"
                                    className="form-control"
                                    value={this.state.date}
                                    onChange={this.handleDateChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <button className="btn btn-success float-right" onClick={this.loadInitialPage}>Оновити</button>
                    </div>
                </div>
                {this.showPhotos()}
                <div className="row">
                    <div className="col-12">
                        <button className="btn btn-success" onClick={this.loadNextPage}>Довантажити ще 25</button>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({
    photos: state.photos
});

export default connect(mapStateToProps)(PhotosList);
