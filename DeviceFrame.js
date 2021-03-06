import React from 'react'
import isFullScreen from './isFullScreen'
import './DeviceFrame.css'

const Nexus5 = 'nexus-5'
const Nexus6p = 'nexus-6p'
const iPhone4 = 'iphone-4'
const SamsunS8 = 'samsung-s8'

export default class DeviceFrame extends React.Component {
    state = {
        device: Nexus5
    }

    constructor(props) {
        super(props)

        this.iframe = (
            <iframe
                src={window.location.href}
                className='df-Screen'
            ></iframe>
        )

        window.forceUpdate = () => {
            this.forceUpdate()
        }
    }

    render() {
        return (
            <div className={`${isFullScreen(this.props.options) ? 'fullScreen' : ''}`}>
                <div className='df-DeviceFrameApp'>
                    <div className={`df-DeviceFrame df-DeviceFrame--${this.state.device}`}>
                        <div className='df-Screen-wrapper'>
                            {this.iframe}
                        </div>
                    </div>
                </div>
                <div className='df-DeviceMenu df-DeviceMenu--active'>
                    <div className='df-DeviceMenu__menu'>
                        <select value={this.state.device} onChange={(e) => {
                            this.setState({
                                device: e.target.value
                            })
                        }}>
                            <option value={Nexus5}>Nexus 5</option>
                            <option value={Nexus6p}>Nexus 6P</option>
                            <option value={iPhone4}>iPhone 4</option>
                            <option value={SamsunS8}>Samsung S8</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}
