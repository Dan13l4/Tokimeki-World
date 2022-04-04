export const newPost = () => {
    const newAddPost  = `
    <input type="checkbox" id="btn-modal">
    <div class="desktopMain" id="desktopMain">
      <div class="contentModal" id='contentModal'>
        <div class="newPostTitle" id="newPostTitle">
          <label for="btn-modal"></label>
          <p class="newPostUserName" id="newPostUserName"></p>
        </div>
        <div class="newPostContent">
          <textarea id="newPostText" name="newPostText" class="newPostTextInput" rows="10"cols="25" placeholder="Escribe aquí tu mensaje.."></textarea>
          <div class= "imgPublic">
            <input type="submit" value="Publicar" class="postButton" id="publishBtn">
          </div>
        </div>
      </div>
    </div>
    `;

  const containerRoot = document.getElementById('root');
  const containerNewPost = document.createElement('div');
  containerNewPost.id = 'containerNewPostId';
  containerNewPost.className = 'containerNewPost';
  containerNewPost.innerHTML = newAddPost;
  containerRoot.appendChild(containerNewPost)

  return containerNewPost;
}