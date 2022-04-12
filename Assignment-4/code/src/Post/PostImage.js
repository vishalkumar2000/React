const PostImage = ({ config }) => {
    const relativeImageURL=`../image/${config.PostImage}`;
    return <div className="PostImageWrapper">
    <img src={relativeImageURL} alt={config.description}/>
    </div>;
};
export default PostImage;
