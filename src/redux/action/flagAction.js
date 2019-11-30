import serverCall from '../../modules/serverCall'

export const postXSSFlag = () => {
    return serverCall({
        method: 'GET',
        url: '2ed56f154f7'
    })
}
