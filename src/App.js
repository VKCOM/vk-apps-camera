import React from 'react';
import {Button, Div, Group, Panel, PanelHeader, View, Avatar} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Icon24Camera from '@vkontakte/icons/dist/24/camera';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.fileUpload = React.createRef();
        this.showFileUpload = this.showFileUpload.bind(this);
    }

    showFileUpload() {
        this.fileUpload.current.click();
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
                            <Avatar src="https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg"/>
                        </Div>
                        <Div>
                            <Button before={<Icon24Camera/>} size="xl" onClick={this.showFileUpload}>Take a
                                photo</Button>
                            <input style={{display: "none"}} ref={this.fileUpload} type="file" accept="image/*"
                                   capture="camera"/>
                        </Div>
                    </Group>
                </Panel>
            </View>
        );
    }
}

export default App;
