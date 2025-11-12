export const removeItemFromCart = (id: number) => {
  return {
    type: 'REMOVE_ITEM',
    payload: id
  }
}
