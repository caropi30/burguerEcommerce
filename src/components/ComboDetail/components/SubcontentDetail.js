import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const SubcontentContainer = ({ title, listData }) => (
    <>
        <View style={styles.subtitleContainer}>
            <FontAwesome name="circle" size={X_SMALL} color={ORANGE} />
            <Text style={styles.title}>{title}</Text>
        </View>
        <View styles={styles.subcontentContainer}>
            <Text>
                {`\u002E ${PROTEINA}`}: {protein}
            </Text>
            <Text>
                {`\u002E ${VEGETALES}`}: {vegetables.join(', ')}
            </Text>
            <Text>
                {`\u002E ${SALSA}`}: {sauces.join(', ')}
            </Text>
        </View>
    </>
)

export default SubcontentContainer

const styles = StyleSheet.create({
    subcontentContainer: {
        paddingLeft: 30,
    },
})
