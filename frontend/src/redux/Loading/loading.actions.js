import ISLOADING from './loading.types'

export const isLoading = (loading) => {
    return {
        type: ISLOADING,
        payload: loading 
    }
}