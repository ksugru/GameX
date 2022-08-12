import "./Loader.css"
import Image from 'react-bootstrap/Image'

const Loader = ({ isShow }) => {
    if (!isShow) {
        return null
    }

    return (
        <div className="loader__container">
            <div className="loader__text">
                <Image src="https://i.gifer.com/3nRK.gif" />
            </div>

        </div>
    )
}
export default Loader