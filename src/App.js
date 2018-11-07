import React from 'react';
import {View, Panel, PanelHeader, Group} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

class App extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <View activePanel='mainPanel'>
                <Panel id="main">
                    <PanelHeader>
                        VK Connect Test
                    </PanelHeader>
                    <Group title="Data">

                    </Group>
				</Panel>
            </View>
        );
    }
}

export default App;
