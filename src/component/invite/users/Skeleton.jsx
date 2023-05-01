import './skeleton.css';

const Skeleton = () => {
    return (
        <>
            <div className="skeleton">
                <div className="pulse skeleton__header">
                    <div className="pulse skeleton__circle"></div>
                    <div className="pulse skeleton__mini"></div>
                </div>
            </div>
            <br></br>
        </>
    )
}

export default Skeleton;