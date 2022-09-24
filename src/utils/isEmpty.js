
function listHaveEmptyItem(listItens) {
    let key = false
    for (let item of listItens){
      if (item || (item === 0)) {
        if (typeof item == String) {
          if (item.includes(' ')) {
            if (!item.trim()) {
              return true
            }
          }
      }
        key = false
      }
      else return true
  } 
  return key
}

export default listHaveEmptyItem




