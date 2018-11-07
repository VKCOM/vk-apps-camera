import React from 'react';
import {Avatar, Div, Group, Panel, PanelHeader, View} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            source: ''
        }
    }

    handleVideo = (stream) => {
        this.setState({
            source: window.URL.createObjectURL(stream)
        })
    }

    videoError = (err) => {
        alert(err.name)
    }

    componentDidMount(){
        navigator.mediaDevices.getUserMedia({video: true, audio: true})
            .then(this.handleVideo)
            .catch(this.videoError)
    }
    render() {
        return (
            <View activePanel="mainPanel">
                <Panel id="mainPanel">
                    <PanelHeader>
                        Camera
                    </PanelHeader>
                    <Group title="Data">
                        <Div>
                            <video id="video-chat" src={this.state.source} autoPlay>
                            </video>
                        </Div>
                    </Group>
                </Panel>
            </View>
        );
    }
}

export default App;
