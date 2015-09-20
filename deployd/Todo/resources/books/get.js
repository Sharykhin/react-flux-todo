if (query.search && query.search.length > 1) {    
   if (!~this.title.indexOf(query.search)){
      cancel('filter by search');    
   }
}