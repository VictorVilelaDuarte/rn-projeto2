import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";
import { groupGetAll } from "./groupGetAll";

export async function groupCreate(newGroup: string) {
  try{

    const storedGroups = await groupGetAll();

    const groupAlreadyExist = storedGroups.includes(newGroup);

    if(groupAlreadyExist){
      throw new AppError('Já existe um grupo cadastrado com esse nome.');
    }

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify([...storedGroups, newGroup]));
  }catch(error){
    throw error;
  } 
}