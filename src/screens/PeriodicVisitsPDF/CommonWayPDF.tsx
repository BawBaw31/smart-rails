import * as Print from 'expo-print'
import * as Sharing from 'expo-sharing'
import React, { useState } from 'react'
import { CustomButton } from '../../components/formField/FormField'
import * as StyledForm from '../../components/formField/FormField.styles'
import { TitleLayout } from '../../components/layouts/Layouts'
import { Colors } from '../../styles'

export const CommonWayPDF = () => {
    const [name, setName] = useState('')

    const onSubmit = async () => {
        const html = `
            <h1>Visite périodique de la voie courante : </h1>
            <p>${name}</p>`
        const { uri } = await Print.printToFileAsync({ html })
        Sharing.shareAsync(uri)
    }

    return (
        <TitleLayout title="Create PDF" goBack="Home" noFooter>
            <>
                <StyledForm.CustomTextInput
                    placeholder="Title"
                    placeholderTextColor={Colors.gray}
                    value={name}
                    onChangeText={(text: string) => setName(text)}
                />

                <CustomButton text="Submit" onPress={onSubmit} />
            </>
        </TitleLayout>
    )
}
