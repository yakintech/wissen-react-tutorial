import { HomeModel } from "../models/HomeModel";
import AsyncStorage from '@react-native-async-storage/async-storage';


export class FavToStorage {

    async getAllFav(): Promise<HomeModel[]> {

        let favorites = await AsyncStorage.getItem('favorites');
        let data: HomeModel[] = JSON.parse(favorites ?? '[]');

        return data;
    }

    async addToFav(model: HomeModel) {

        let favorites = await AsyncStorage.getItem('favorites');

        let data: HomeModel[] = JSON.parse(favorites ?? '[]');

        if (data.length > 0) {
            let favoritesControl = data.find(q => q.id == model.id);
            if (!favoritesControl)
                data.push(model);
        }


        await AsyncStorage.setItem('favorites', JSON.stringify(data));

    }

    async removeToFav(model: HomeModel) {

        let favorites = await AsyncStorage.getItem('favorites');

        let data: HomeModel[] = JSON.parse(favorites ?? '[]');
        data = data.filter(q => q.id != model.id);

        await AsyncStorage.setItem('favorites', JSON.stringify(data));
    }

}