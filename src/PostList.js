

const PostList=({posts,name,deleteAction})=> {


    return(


        <div className="container">

            <h1>{name}</h1>
            {/*{posts.map((post)=>(*/}

            {/*    <div key={post.id}>*/}
            {/*    <h1>{post.title}</h1>*/}
            {/*        <p>{post.body}</p>*/}



            {/*    </div>*/}
            {/*    ))}*/}


            {/*// Deze zijn allemaal info die komen uit de Posts bestand en dat is een manier waar we de gegevens van een naar andere kunnen brengen.*/}

            <table className="table">
                <thead>
                <tr>

                    <th scope="col">ID</th>
                    <th scope="col">title</th>
                    <th scope="col">Body</th>
                    <th scope="col">MO</th>
                    <th scope="col">Delete</th>
                </tr>
                </thead>
                <tbody>
                {posts && posts.map((post)=>(

                    <tr key={post.id}>
                        <th scope="row">{post.id}</th>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                        <td>{post.mo}</td>
                        <td>

                            <button onClick={() => deleteAction(post.id)} type="button" className="btn btn-danger">Delete</button></td>



                    </tr>

                ))}


                {/*//dat is een table code van bootstrap*/}
                {/*<tr>*/}
                {/*    <th scope="row">1</th>*/}
                {/*    <td>Mark</td>*/}
                {/*    <td>Otto</td>*/}
                {/*    <td>@mdo</td>*/}
                {/*</tr>*/}

                </tbody>
            </table>
        </div>






    );
}
export default PostList;