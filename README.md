# Proshop MERN

[Bootswatch](https://bootswatch.com/)

[MERN eCommerce From Scratch](https://www.udemy.com/course/mern-ecommerce/learn/lecture/22484760#overview)

[What’s new in React Router V6](https://medium.com/@manishsundriyal/whats-new-in-react-router-v6-20eefe665be9)

// 10. Ders Dakika 3 dk'da kalındı / Toplam 92 ders 15 saat

## Ürün detay sayfa mantığı

```js script
//App.jsx içinde path tanımı
;<Route path='product/:id' element={<ProductScreen />} />

import React from 'react'
import products from '../products'
import { useParams } from 'react-router-dom' // 1. aşama

const ProductScreen = () => {
  let { id } = useParams() // 2. aşama
  const product = products.find((p) => p._id === id) // 3. aşama
  return <div>{product.name}</div>
}
export default ProductScreen
```
