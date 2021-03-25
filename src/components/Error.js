export default ({ message = 'Невідома помилка' }) => (
    <div className="alert alert-danger" role="alert">
        { message }
    </div>
);
