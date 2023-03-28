import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import RNFS from 'react-native-fs';
import { SafeAreaView } from 'react-native-safe-area-context';


const FileStackScreen = () => {

    const [downloadsFolder, setDownloadsFolder] = useState('');
    const [documentsFolder, setDocumentsFolder] = useState('');
    const [externalDirectory, setExternalDirectory] = useState('');


    useEffect(() => {
   //get user's file paths from react-native-fs
    setDownloadsFolder(RNFS.DownloadDirectoryPath);
    setDocumentsFolder(RNFS.DocumentDirectoryPath); //alternative to MainBundleDirectory.
    setExternalDirectory(RNFS.ExternalStorageDirectoryPath);    }, []);

    return (
        <SafeAreaView>
        <Text> Downloads Folder: {downloadsFolder}</Text>
        <Text>Documents folder: {documentsFolder}</Text>
        <Text>External storage: {externalDirectory}</Text>
      </SafeAreaView>
    );
}

export default FileStackScreen