import React from 'react';
import {Avatar, Div, Group, Panel, PanelHeader, View} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.video = React.createRef();
    }

    handleVideo(stream) {
        this.video.src = window.URL.createObjectURL(stream);
    }

    videoError() {

    }

    render() {
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

        if (navigator.getUserMedia) {
            navigator.getUserMedia({video: true}, this.handleVideo, this.videoError);
        }

        return (
            <View activePanel="mainPanel">
                <Panel id="mainPanel">
                    <PanelHeader>
                        Camera
                    </PanelHeader>
                    <Group title="Data">
                        <Div>
                            <video ref={this.video}  id="player" autoPlay></video>
                        </Div>
                    </Group>
                </Panel>
            </View>
        );
    }
}

export default App;
