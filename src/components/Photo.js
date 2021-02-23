export default ({ photo }) => (
    <div className="col-6">
        <div className="card">
            <img src={photo.img_src} className="card-img-top" alt={photo.id} />
            <div className="card-body">
                <h5 className="card-title">Photo ID: {photo.id}</h5>
                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <strong>Camera:</strong>
                        <span>{photo.camera.full_name}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Земна дата:
                        <span>{photo.earth_date}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        День Марса:
                        <span>{photo.sol}</span>
                    </li>
                    <li className="list-group-item">
                        <strong>Rover:</strong>
                        <span style={{float: 'right'}}>{photo.rover.name}</span>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Запуск:
                                <span>{photo.rover.launch_date}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Посадка:
                                <span>{photo.rover.landing_date}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Статус:
                                <span className="badge bg-success rounded-pill">{photo.rover.status}</span>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
);
