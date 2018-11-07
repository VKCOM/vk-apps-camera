import React from 'react';
import {Avatar, Div, Group, Panel, PanelHeader, View} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            videoSrc: null
        };
    }

    componentDidMount() {
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
        if (navigator.getUserMedia) {
            navigator.getUserMedia({video: true}, this.handleVideo, this.videoError);
        }
    }

    handleVideo(stream) {
        this.setState({videoSrc: window.URL.createObjectURL(stream)});
    }

    videoError() {

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
                            <video id="player" src={this.state.videoSrc} autoPlay></video>
                        </Div>

                        <Div>{this.state.videoSrc}</Div>
                    </Group>
                </Panel>
            </View>
        );
    }
}

export default App;
