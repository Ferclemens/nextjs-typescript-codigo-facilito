import styles from "../../styles/Home.module.css";

type UserData = {
    name? : string,
    id? : string,
    email? : string,
    website? : string,
    company? : {
        name? : string,
        bs? : string
    },
    address? : {
        street? : string,
        city? : string,
        suite? : string
    },
    phone? : string
}

type UserDataProps = {
    usersArray : UserData[]
}

export default function Users({usersArray}: UserDataProps ){
    console.log(usersArray)
    return (
        <section>
            <h1 className={styles.title}>Users</h1>
            <a className={styles.link} href="https://jsonplaceholder.typicode.com/users" target="_blank">font: Json Place Holder</a>
            <div>
                {usersArray?.map((user: UserData) => {
                    return (
                        <div key={user.id} className={styles.card}>
                            
                            <h2>{`${user.id} - ${user.name}`}</h2>
                            <div className={styles.description}>
                                <h4>Website: {user.website}</h4>
                                <h4>Company: {user.company?.name}</h4>
                                <h4>Business: {user.company?.bs}</h4>
                                <h4>Email: {user.email}</h4>
                                <h4>Phone: {user.phone}</h4>
                            </div>
                            <div className={styles.address}>
                                <h4>Address: {`${user.address?.street} - ${user.address?.suite}`}</h4>
                                <h4>City: {user.address?.city}</h4>
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
        //console.log('DATA', data)
        return {
            props : {data}
        }
    } catch (error) {
        return console.log(error)
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