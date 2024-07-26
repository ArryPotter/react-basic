import { useEffect, useState } from "react";

export default function FruitShop() { 

  const [inputs, setInputs] = useState({
    fruitName: '',
    quantity: '',
    isFromInput: false
  })

  const [fruits, setFruits] = useState([])
  
  const onChange = (event, field) => {
    setInputs((prevState) => ({
      fruitName: field === 'fruitName' ? event.target.value : prevState.fruitName,
      quantity: field === 'quantity' ? event.target.value : prevState.quantity
    }))


  }

  const onSubmit = (event) => {
   
    const {isFromInput, ...rest} = inputs;
    const sortedFruits = [...fruits, {
      ...rest,
      isFromInput: typeof event === 'undefined' ? true : false
    }].sort((a, b) => a.quantity - b.quantity)
    setFruits(sortedFruits)
    
  }

  useEffect(() => {
    if(inputs.quantity) {
      onSubmit()
    }
  }, [inputs.quantity])
  
  
  return (
    <form>
      <h2>Fruit Shop</h2>
      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="name">Fruit Name</label>
          <input id="fruitname" type="text" name="fruitname" onChange={(event) => onChange(event, 'fruitName')} />
        </div>

        <div className="control no-margin">
          <label htmlFor="year">Quantity</label>
          <input id="quantity" type="text" name="quantity"  onChange={(event) => onChange(event, 'quantity')}/>
        </div>
      </div>
        <button className="button" type="button" onClick={onSubmit}>Save</button>
        <div className="control-row-fruits">
        <FruitList fruitList={fruits}/>
        </div>      
    </form>
  );
}


const FruitList= ({ fruitList }) => {
  return  fruitList.map((fruit, index) => (
    <div className="item" key={index}>{fruit.fruitName} - {fruit.quantity} - {fruit.isFromInput ? 'Input' : 'Button'}</div>
  ))
  
};