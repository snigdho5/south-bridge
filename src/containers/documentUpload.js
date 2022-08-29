import { StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Text from '../components/text'
import Dialog, { DialogContent, DialogTitle, DialogFooter, DialogButton, SlideAnimation } from 'react-native-popup-dialog';
import { app } from '../utils/colors';
import Icon from '../components/icon';
import { deviceWidth } from '../utils/constants';
import DocumentPicker from 'react-native-document-picker';


export default function DocumentUpload(props) {
    const { isVisible, setIsVisible } = props;
    const [file, setFile] = useState();

    const selectFile = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.pdf],
            });
            setFile(res);
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
            } else {
                alert('Unknown Error: ' + JSON.stringify(err));
            }
        }


    };

    return (
        <Dialog
            visible={isVisible}
            dialogTitle={<DialogTitle title="Upload document" />}
            onTouchOutside={() => setIsVisible(false)}
            dialogAnimation={new SlideAnimation({
                slideFrom: 'bottom',
            })}

            footer={
                <DialogFooter>
                    <DialogButton
                        text="CANCEL"
                        onPress={() => setIsVisible(false)}
                        textStyle={{ color: 'grey', fontSize: 15, fontWeight: '200' }}
                    />
                    <DialogButton
                        text="SUBMIT"
                        onPress={() => setIsVisible(false)}
                        textStyle={{ color: app, fontSize: 20, fontWeight: 'bold' }}
                    />
                </DialogFooter>
            }
        >

            <DialogContent style={{ padding: 20 }}>
                <TouchableOpacity
                    style={styles.row}
                    onPress={selectFile}
                >
                    <Icon
                        type="MaterialIcons"
                        name="upload-file"
                        color={app}
                        size={40}
                    />
                    <Text size={18} color={app} style={{ paddingLeft: 10 }}>{file?.name ?? "Upload document 1"}</Text>

                </TouchableOpacity>
            </DialogContent>
        </Dialog>

    )
}
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10,
        width: deviceWidth / 1.2

    }
})