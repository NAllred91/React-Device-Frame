import DeviceFrame from './DeviceFrame'

export default (ReactDOM, React, App, id) => {
    if(window.parent === window) {
        var DeviceFrameComponent = DeviceFrame(React)
        ReactDOM.render(<DeviceFrameComponent />, document.getElementById(id))
    }
    else {
        var observer = new MutationObserver(() => {
            if(window.location.href !== window.parent.location.href) {
                window.parent.history.replaceState(null, '', window.location.href)
            }
        })
        observer.observe(document.getElementById(id), { attributes: true, childList: true, subtree: true })
        ReactDOM.render(<App />, document.getElementById(id));
    }
}