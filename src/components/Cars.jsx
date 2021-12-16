import React from 'react'

const Style =  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    inset: 0,
    overflow: 'hidden'

}
const dom = (
    <div style={Style}>
        <h1>Thiraphat</h1>
        <h1>Hello</h1>
    </div>
)
const Cars = () => {
    return (
        <>
            {dom}
        </>
    )
}

export default Cars
