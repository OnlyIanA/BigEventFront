import request from "@/utils/request";
import{useTokenStore} from '@/stores/token'
export const articleCategoryService=()=>{
    //const tokenStore=useTokenStore();

    return request.get('/category');
}
export const articleCategoryAddService=(categoryData)=>{
    return request.post('/category',categoryData);
}

export const articleCategoryUpdateService=(categoryData)=>{
    return request.put('/category',categoryData);
}
export const articleCategoryDeleteService=(id)=>{
    return request.delete('/category?id='+id);
}

export const articleListService=(params)=>{
    return request.get('/article',{params:params});
}

export const articleAddService=(articleData)=>{
    return request.post('/article',articleData);
}