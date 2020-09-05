(all_users, linked_users) => {
  
 all_users.forEach(json_obj => {
   if (linked_users.indexof(json_obj.id) == -1) {
     new_array.push(json_obj)
   }
  }
  return new_array
}
