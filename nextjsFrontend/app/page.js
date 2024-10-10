
// "use client"; // This is required to enable client-side rendering in Next.js App Router

// import { useState, useEffect } from 'react';
// import { JsonRpcProvider, Contract, Wallet } from "ethers"; // Import Wallet for signing
// import CounterAbi from '../artifacts/contracts/counter.json'; // Adjust the path as needed

// export default function Home() {
//     const [count, setCount] = useState(0);
//     const [input, setInput] = useState(0);
//     const [contract, setContract] = useState(null);
    
//     const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;
//     const providerURL = process.env.NEXT_PUBLIC_NETWORK_URL;
//     const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY; // Use private key here

//     useEffect(() => {
//         const provider = new JsonRpcProvider(providerURL);
//         const wallet = new Wallet(privateKey).connect(provider); // Connect wallet
//         const contract = new Contract(contractAddress, CounterAbi.abi, wallet);
//         setContract(contract);

//         // Get the initial count from the contract
//         contract.getCount()
//             .then((result) => {
//                 setCount(parseInt(result)); // Convert to number
//             })
//             .catch((error) => {
//                 console.error("Error fetching initial count:", error);
//             });
//     }, [contractAddress, providerURL, privateKey]);

//     const addNumber = async () => {
//         try {
//             const tx = await contract.addNumber(input);
//             await tx.wait();
//             const updatedCount = await contract.getCount();
//             console.log("Updated Count after addition:", updatedCount);
//             setCount(parseInt(updatedCount)); // Convert to number
//         } catch (error) {
//             console.error("Error in addNumber:", error); // Log errors
//         }
//     };

//     const subtractNumber = async () => {
//         try {
//             const tx = await contract.subtractNumber(input);
//             await tx.wait();
//             const updatedCount = await contract.getCount();
//             console.log("Updated Count after subtraction:", updatedCount);
//             setCount(parseInt(updatedCount)); // Convert to number
//         } catch (error) {
//             console.error("Error in subtractNumber:", error); // Log errors
//         }
//     };

//     return (
//         <div>
//             <h1>Counter: {count}</h1>
//             <input
//                 type="number"
//                 value={input}
//                 onChange={(e) => setInput(parseInt(e.target.value) || 0)} // Default to 0 if NaN
//             />
//             <button onClick={addNumber}>Add</button>
//             <button onClick={subtractNumber}>Subtract</button>
//         </div>
//     );
// }


"use client"; // This is required to enable client-side rendering in Next.js App Router

import { useState, useEffect } from 'react';
import { JsonRpcProvider, Contract, Wallet } from "ethers"; // Import Wallet for signing
import CounterAbi from '../artifacts/contracts/counter.json'; // Adjust the path as needed
import styles from './Home.module.css'; // Import CSS module

export default function Home() {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState(0);
    const [contract, setContract] = useState(null);
    
    const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;
    const providerURL = process.env.NEXT_PUBLIC_NETWORK_URL;
    const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY; // Use private key here

    useEffect(() => {
        const provider = new JsonRpcProvider(providerURL);
        const wallet = new Wallet(privateKey).connect(provider); // Connect wallet
        const contract = new Contract(contractAddress, CounterAbi.abi, wallet);
        setContract(contract);

        // Get the initial count from the contract
        contract.getCount()
            .then((result) => {
                setCount(parseInt(result)); // Convert to number
            })
            .catch((error) => {
                console.error("Error fetching initial count:", error);
            });
    }, [contractAddress, providerURL, privateKey]);

    const addNumber = async () => {
        try {
            const tx = await contract.addNumber(input);
            await tx.wait();
            const updatedCount = await contract.getCount();
            console.log("Updated Count after addition:", updatedCount);
            setCount(parseInt(updatedCount)); // Convert to number
        } catch (error) {
            console.error("Error in addNumber:", error); // Log errors
        }
    };

    const subtractNumber = async () => {
        try {
            const tx = await contract.subtractNumber(input);
            await tx.wait();
            const updatedCount = await contract.getCount();
            console.log("Updated Count after subtraction:", updatedCount);
            setCount(parseInt(updatedCount)); // Convert to number
        } catch (error) {
            console.error("Error in subtractNumber:", error); // Log errors
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.counterTitle}>Counter: {count}</h1>
            <div className={styles.inputContainer}>
                <input
                    type="number"
                    className={styles.inputBox}
                    value={input}
                    onChange={(e) => setInput(parseInt(e.target.value) || 0)} // Default to 0 if NaN
                />
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={addNumber}>Add</button>
                <button className={styles.button} onClick={subtractNumber}>Subtract</button>
            </div>
        </div>
    );
}
