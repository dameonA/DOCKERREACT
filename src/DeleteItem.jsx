// import React from 'react'

// async function DeleteItem(props) {
//     if (props.deleteItemFlag) {
//         await fetch('http://localhost:3001/list', {
//             method: 'DELETE',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//                 body: JSON.stringify(props.itemToDelete)
//         })
//         props.itemDeleted(props.itemToDelete)
//     }
// }
    

//     // createItemObj() {
//     //     var item = {}
//     //     item.item = document.getElementById('item').value
//     //     item.qty = document.getElementById('quantity').value
//     //     item.units = document.getElementById('units').value
//     //     this.addItemToServer(item)
//     //     this.props.itemAdded(item)
//     // }

//     // async addItemToServer(item) {
//     //     await fetch('http://localhost:3001/list', {
//     //         method: 'POST',
//     //         headers: {
//     //             'Content-Type': 'application/json'
//     //           },
//     //           body: JSON.stringify(item)
//     //     })
//     // }



// export default DeleteItem