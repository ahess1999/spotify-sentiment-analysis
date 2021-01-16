import INDEX from './index.types'

export const isIndex = (index) => {
    return {
        type: INDEX,
        payload: index 
    }
}