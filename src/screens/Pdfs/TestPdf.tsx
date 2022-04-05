import React, { useState } from 'react'
import { CustomButton } from '../../components/formField/FormField'
import * as StyledForm from '../../components/formField/FormField.styles'
import { TitleLayout } from '../../components/layouts/Layouts'
import { Colors } from '../../styles'
import * as Print from 'expo-print'
import * as Sharing from 'expo-sharing'

export const TestPdf = () => {
    const [name, setName] = useState('')

    const onSubmit = async () => {
        const html = `<h1> ${name} </h1>`
        const { uri } = await Print.printToFileAsync({ html })
        Sharing.shareAsync(uri)
    }

    return (
        <TitleLayout title="Create PDF">
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
