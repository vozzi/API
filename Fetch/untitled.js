  function getCategories(){
    fetch('http://46.101.146.101:8081/categories/')
    .then((res) => res.json())
    .then((data) => {
      let output = '<h2>Categories</h2>';
      Array.from(data).forEach(function(parse){
        output += `
        <ul>
          <li>ID: ${parse.id}</li>
          <li>Title: ${parse.title}</li>
          <li>category_image_url:<img src=${parse.category_image_url}></li>
        </ul>
        `;
      });
      document.getElementById('output').innerHTML = output;
    })
  }
document.getElementById('parse_it').addEventListener('click' , getCategories);
