import Modal from "../components/Modal"
import { primaryColors, backgroundColors } from "./data"
import PrimaryColor from "./PrimaryColor"
import BackgroundColor from './BackgroundColor';
import './theme.css'

const Theme = () => {
  return (
    <Modal className="theme__modal">
        <h3>Change Theme from here</h3>
        <small>Here i have added different Theme color. give it a try...</small>
        <div className="theme__primary-wrapper">
            <h5>You may like them..</h5>
            <div className="theme__primary-colors">
                {
                    primaryColors.map(pColor => <PrimaryColor key={pColor.className} className={pColor.className}/>)
                }
            </div>
        </div>
        <div className="theme__background-wrapper">
            <h5>Background Color</h5>
            <div className="theme__background-colors">
                {
                    backgroundColors.map(bColor => <BackgroundColor key={bColor.className} className={bColor.className} />)
                }
            </div>
        </div>
    </Modal>
  )
}

export default Theme