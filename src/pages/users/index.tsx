import styles from "../../styles/Home.module.css";

export default function Users({data}: any){
    console.log(data)
    return (
        <section>
            <h1 className={styles.title}>Users</h1>
            <div>
                {data.map((user: any) => {
                    const { name, id, email, website, company, address, phone } = user
                    return (
                        <div key={id} className={styles.card}>
                            
                            <h2>{`${id} - ${name}`}</h2>
                            <div className={styles.description}>
                                <h4>Website: {website}</h4>
                                <h4>Company: {company.name}</h4>
                                <h4>Business: {company.bs}</h4>
                                <h4>Email: {email}</h4>
                                <h4>Phone: {phone}</h4>
                            </div>
                            <div className={styles.address}>
                                <h4>Address: {`${address.street} - ${address.suite}`}</h4>
                                <h4>City: {address.city}</h4>
                            </div>

                        </div>
                    )
                    
                })}
            </div>
        </section>
    )
}

export async function getStaticProps(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log('DATA', data)
        return {
            props : {data}
        }
    } catch (error) {
        return {
            message : {error}
        }
    }
}

/* export async function getServerSideProps(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log('DATA', data)
        return {
            props : {data}
        }
    } catch (error) {
        return {
            message : {error}
        }
    }
} */