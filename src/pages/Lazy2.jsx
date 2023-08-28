import React,{useState} from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';

  const Lazy2 = () => {
    const [dataSource, setDataSource] = useState(Array.from({ length: 20 }));
    const [hasMore, setHasMore] = useState(true)
    const style ={
      border: "1px solid green",
      margin: 8,
      padding: 10,
      textAlign: "center"
    }
    const parentStyle ={
      height: 400,
      overflow: "scroll"
    }
    const fetchMoreData = () => { 
      if(dataSource.length < 200){
        setTimeout(()=>{
          setDataSource(dataSource.concat(Array.from({ length: 20 })))
        },500)
      }else{
        setHasMore(false)
      }
    }
  return (
    <div id="parentScroll" style={parentStyle}>
      <InfiniteScroll dataLength={dataSource.length} next={fetchMoreData} hasMore={hasMore} loader={<div>Loading ....</div>} endMessage={<div>You are all data are set !</div>}
      scrollableTarget="parentScroll">
        {
          dataSource.map((item,index)=> {return <div key={index} style={style}>this is a div #{index+1}</div>})
        }

      </InfiniteScroll>
    </div>
  )
}

export default Lazy2;