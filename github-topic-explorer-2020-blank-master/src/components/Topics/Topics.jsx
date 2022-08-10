function Topics({topics, updateTopic})
{
    return   <ul className="list-group">
    {
        topics.map((topic) =>
            <li key={topic.id} onClick={()=>updateTopic(topic.name)} className="list-group-item d-flex justify-content-between align-items-center">
            {topic.name}
            <span className="badge bg-primary rounded-pill">{topic.stargazerCount}</span>
            </li>
        )
    }
    
  
  </ul>
}

export default Topics;