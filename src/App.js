import About from './components/pages/About/About.js';
import Home from './components/pages/Home/Home.js';
import NotFound from './components/pages/NotFound/NotFound.js';
import Post from './components/pages/Post/Post.js';
import { Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from './components/views/Header';
import Footer from './components/views/Footer';
import AddPostForm from './components/features/AddPostForm.js';
import EditPostForm from './components/features/EditPostForm';

const App = () => {
  return (
    <main>
      <Container>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/post/:id' element={<Post />} />
          <Route path='/post/add' element={<AddPostForm />} />
          <Route path='/post/edit/:postId' element={<EditPostForm />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
    </main>
  );
};

export default App;