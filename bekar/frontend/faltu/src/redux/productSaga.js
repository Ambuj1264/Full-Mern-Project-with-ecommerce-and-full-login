import {takeEvery,put} from 'redux-saga/effects'

import { PRODUCT_LIST,SEARCH_PRODUCT,SET_PRODUCT_LIST } from './constant'

function* getProducts(){
    let data=yield fetch('http://localhost:4500/productAll')
    data=yield data.json();
        console.log(data,"getproducts")
        yield put ({type:SET_PRODUCT_LIST,data})
}
function* searchProducts(data){
    console.log(data)
    let result =yield fetch ('http://localhost:3500')
    result=yield result.json();
    console.log(result,"seachProduct");
    yield put({type:SET_PRODUCT_LIST, data:result})
}


function* productSaga(){
    yield takeEvery(PRODUCT_LIST,getProducts);
    yield takeEvery(SEARCH_PRODUCT,searchProducts)
}

export default productSaga;