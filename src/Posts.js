
import React, {useEffect,useState} from "react";
import PostList from "./PostList";

const Posts = ()=>{

    const [checkAuth, setCheckAuth] = useState(false)
    const [isWaiting, setIsWaiting] = useState(true)
    const [serverError, setServerError] = useState(true)



    const [posts, setPost]=useState([



        {
            userId: 1,
            id: 0,
            mo:"Goed zo",
            title: "sunt aut deltion",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            userId: 1,
            id: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            userId: 1,
            id: 2,
            title: "qui est esse",
            body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
            userId: 1,
            id: 3,
            title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        },
        {
            userId: 1,
            id: 4,
            title: "eum et est occaecati",
            body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
        },
        {
            userId: 1,
            id: 5,
            title: "nesciunt quas odio",
            body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
        },




    ]);

    // const [post, setPost] = useState(null)


    const deleteAction = (id)=>{


        const updatedPosts = posts.filter(post=> post.id !=id);
        setPost(updatedPosts)
    }


    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts') // dat is de manier hoe ik de data via API kunnen halen door de useEffest .
            .then(response=>{
                console.log(response.ok)
                if(!response.ok){

                    throw Error("It is a big probleem I can not connect to the server")
                }


                return response.json();
            })
            .then(data => {
                console.log(data);
                setPost(data);
                setIsWaiting(false)
            }).catch(e=>{
            console.log(e.message)
            setServerError(e.message)

        });
    },[]);
    // useEffect(()=>{
    //     console.log("useEffect loaded mo")
    //     console.log(Posts)
    // },[checkAuth]);
    return(

        <div>
            <button type="button" onClick={ ()=> setCheckAuth("true")} className="btn btn-secondary">Secondary</button>
            <h1>Status:{checkAuth}</h1>
            {isWaiting && <h1> Even wachten het is aan het laden 🤷‍♂️🤷‍♂️🤷‍♂️🤷‍♂️🤷‍♂️</h1>}
            {/*// dat is een messege die komt waneer het aan het laden is */}
            {serverError && <h1> het is een error️</h1>}
            {/*dat is een massage van error die komt naar de gebruiker */}

            <PostList posts={posts} name="Posten Page" deleteAction={deleteAction}/>
        </div>








        // ✌✌✌✌ de bovenste lijn regelt dat alle code wordt verzend naar de Postlist








// <div className="container">
//     {/*{posts.map((post)=>(*/}
//
//     {/*    <div key={post.id}>*/}
//     {/*    <h1>{post.title}</h1>*/}
//     {/*        <p>{post.body}</p>*/}
//
//
//
//     {/*    </div>*/}
//     {/*    ))}*/}
//
//     <table className="table">
//         <thead>
//         <tr>
//
//             <th scope="col">ID</th>
//             <th scope="col">title</th>
//             <th scope="col">Body</th>
//             <th scope="col">MO</th>
//         </tr>
//         </thead>
//         <tbody>
//         {posts.map((post)=>(
//
//             <tr key={post.id}>
//                 <th scope="row">{post.id}</th>
//                 <td>{post.title}</td>
//                 <td>{post.body}</td>
//                 <td>{post.mo}</td>
//
//
//
//             </tr>
//
//         ))}
//
//
// {/*//dat is een table code van bootstrap*/}
//         {/*<tr>*/}
//         {/*    <th scope="row">1</th>*/}
//         {/*    <td>Mark</td>*/}
//         {/*    <td>Otto</td>*/}
//         {/*    <td>@mdo</td>*/}
//         {/*</tr>*/}
//
//         </tbody>
//     </table>
// </div>
//


    );


}
export default Posts;


