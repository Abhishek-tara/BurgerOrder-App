import React from 'react';
import { Country,State } from 'country-state-city'; 

const Shipping = () => {
    return (
        <section className='shipping' >

            <main>
                <h1>Shipping Details</h1>
                <form >

                    <div>
                        <label >Country</label>
                        <select >
                            <option value="" >country</option >
                            {
                                Country && Country.getAllCountries().map((i)=>(
                                    <option value={i.isoCode} key={i.isoCode} >{i.name}</option >
                                ))
                            }
                        </select>
                    </div>
                    <div>
                        <label >State</label>
                        <select >
                            <option value="" >State</option >
                            {
                                State && State.getStatesOfCountry("IN").map((i)=>(
                                    <option value={i.isoCode} key={i.isoCode} >{i.name}</option >
                                ))
                            }
                        </select>
                    </div>


                    <div>
                        <label>Addess</label>
                        <input type="text" placeholder='Enter your address' />
                    </div>
                    <div>
                        <label >Addess</label>
                        <input type="text" placeholder='Enter your address' />
                    </div>
                    <div>
                        <label >City</label>
                        <input type="text" placeholder='Enter City' />
                    </div>
                    <div>
                        <label >Pincode</label>
                        <input type="number" placeholder='Enter your Pincode' />
                    </div>
                    <div>
                        <label >Contact No.</label>
                        <input type="number" placeholder='Enter your Number' />
                    </div>

                    <button type="submit">confirm order</button>

                </form>
            </main>

        </section>
    )
}

export default Shipping;