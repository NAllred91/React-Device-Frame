import DeviceFrame from './DeviceFrame'

export default (ReactDOM, React, App, id) => {
    var renderApp = (App) => {
        var observer = new MutationObserver(() => {
            if(window.location.href !== window.parent.location.href) {
                window.parent.history.replaceState(null, '', window.location.href)
            }
        })
        observer.observe(document.getElementById(id), { attributes: true, childList: true, subtree: true })
        ReactDOM.render(App, document.getElementById(id));
    }
    
    if(window.parent === window) {
        var DeviceFrameComponent = DeviceFrame(React)
        ReactDOM.render(<DeviceFrameComponent />, document.getElementById(id))
    }
    else {
        if(typeof App === 'function') {
            App().then(renderApp)
        }
        else {
            renderApp(App)
        }
    }
}