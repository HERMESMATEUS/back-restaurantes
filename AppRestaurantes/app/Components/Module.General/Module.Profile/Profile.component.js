import React, { Component } from 'react';
import { TouchableOpacity, Image, View, Text, TextInput, Switch, Alert } from "react-native";
import { Styles } from "./Styles";
import { ImagesApp } from "../../../Assets/ImagesApp";
import { Colors } from '../../../Constants/Constants';
import AlertModalComponent from '../../../Components/Globals/AlertModal.component';
import ImagePicker from 'react-native-image-crop-picker';


export default class ProfileComponent extends Component {


    constructor(props) {
        super(props)
        this.state = {
            Name: 'Andrea Contreras',
            Email: 'andreacras@dominio.co',
            status: true,
            Edit: false,
            showModalDeleteAcount: false,
            ImageProfile: '',
            ImageProfileBase64: '',
        }
    }



    ChangePhotoProfile() {
        ImagePicker.openPicker({
            height: 1000,
            width: 1000,
            cropping: true,
            includeBase64: true
        }).then(image => {

            this.setState({
                ImageProfile: image.path,
                ImageProfileBase64: image.data
            })
        }).catch(erro => {
            console.log('Error :', erro)
            Alert.alert(
                '',
                "No seleccionaste ninguna imagen",
                [{
                    text: 'OK', onPress: () => { }
                }],
            );
        });
    }

    render() {

        const { callBackLogout, callUserBlocked } = this.props;

        return (

            <View style={Styles.View1}>

                <AlertModalComponent
                    cancel={() => this.setState({ showModalDeleteAcount: false })}
                    confirm={() => this.setState({ showModalDeleteAcount: false })}
                    HeaderTitle={'¿Seguro deseas eliminar tu cuenta?'}
                    SubHeaderTitle={'Luego de eliminarla toda tu información se borrará'}
                    Visible={this.state.showModalDeleteAcount}
                    CancelText={'Cancelar'}
                    ConfirmText={'Eliminar'}
                />

                <View style={{ padding: 10, width: '90%', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                        <View style={{ height: 120, width: 120, borderRadius: 60, borderWidth: 2, borderColor: Colors.RED, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity
                                onPress={() => this.ChangePhotoProfile()}
                                disabled={!this.state.Edit}
                                style={{ height: 120, width: 120, borderRadius: 60, borderWidth: 2, borderColor: Colors.RED, justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    style={{ height: 110, width: 110, borderRadius: 55 }}
                                    source={
                                        this.state.ImageProfile ?
                                            { uri: this.state.ImageProfile }
                                            :
                                            ImagesApp.ImageTest
                                    }
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', paddingHorizontal: 20, marginTop: 10, }}>
                            <TextInput
                                style={{
                                    height: 40,
                                    color: 'white',
                                    fontSize: 15,
                                    fontWeight: 'bold',
                                    opacity: 0.8
                                }}
                                editable={this.state.Edit}
                                placeholderTextColor='white'
                                placeholder={'Ingrese su nombre'}
                                onChange={(Name) => this.setState({ Name })}
                                value={this.state.Name}
                            />
                            <TextInput
                                style={{
                                    height: 40,
                                    color: 'white',
                                    fontSize: 15,
                                    opacity: 0.8
                                }}
                                editable={this.state.Edit}
                                placeholderTextColor='white'
                                placeholder={'Ingrese su correo'}
                                onChange={(Email) => this.setState({ Email })}
                                value={this.state.Email}
                            />
                        </View>
                    </View>

                    {
                        !this.state.Edit ?
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity
                                    onPress={() => this.setState({ Edit: true })}
                                    style={{
                                        alignContent: 'center',
                                        justifyContent: 'center',
                                        width: '100%',
                                        height: 40,
                                        opacity: 0.8
                                    }}>
                                    <Text style={{ color: Colors.RED, opacity: 0.8, fontSize: 18, textAlign: 'center' }}>Editar perfil</Text>
                                </TouchableOpacity>
                            </View>
                            :
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity
                                    onPress={() => this.setState({ Edit: false })}
                                    style={{
                                        alignContent: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: 'white',
                                        borderRadius: 25,
                                        width: 150,
                                        height: 40,
                                    }}>
                                    <Text style={{ color: Colors.RED, opacity: 0.8, fontSize: 18, textAlign: 'center' }}>Aceptar</Text>
                                </TouchableOpacity>
                            </View>
                    }

                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <View style={{ width: '80%', height: 80 }}>
                                <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>Estado del chat</Text>
                                <Text style={{ fontSize: 14, color: 'white' }}>Puedes activar o desactivar el chat</Text>
                            </View>
                            <View style={{
                                width: '20%', height: 80,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Switch
                                    onValueChange={status => this.setState({ status })}
                                    style={{ marginBottom: 10 }}
                                    // thumbTintColor={Colors.RED}
                                    // tintColor={Colors.GREY}
                                    // onTintColor={Colors.GREY}
                                    value={this.state.status}
                                />
                            </View>
                        </View>
                    </View>

                </View>

                <View style={{ paddingHorizontal: 20, justifyContent: 'flex-end', alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={callUserBlocked}
                        style={Styles.TouchableOpacity1}>
                        <Text style={Styles.Text5}>Usuarios bloqueados</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={Styles.TouchableOpacity1}
                        onPress={callBackLogout}>
                        <Text style={Styles.Text5}>Cerrar sesion</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.setState({ showModalDeleteAcount: true })}
                        style={Styles.TouchableOpacity1}>
                        <Text style={Styles.Text5}>Eliminar cuenta</Text>
                    </TouchableOpacity>
                </View>

            </View >

        );
    }


}
