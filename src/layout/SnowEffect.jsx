import Snowfall from 'react-snowfall';

const SnowEffect = () => {
    return (
        <div>
            <Snowfall
                snowflakeCount={100}
                color="blue"
                style={{
                    position: 'fixed',
                    width: '100vw',
                    height: '100vh',
                    zIndex: 9999,
                }}
            />
        </div>
    )
}

export default SnowEffect