### Project: Photo-Dump

#### Description:

The Photo-Dump project is a React application that fetches and displays images from the Unsplash API. Users can search for images using the integrated SearchBox component and utilize drag-and-drop functionality for image reordering.

#### Dependencies:

- React
- react-beautiful-dnd
- axios

#### Installation:

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`

#### Usage:

1. Obtain an Unsplash API key from [Unsplash Developer](https://unsplash.com/developers).
2. Create a `.env` file in the project root and add the API key:

   ```env
   REACT_APP_UNSPLASH_API_KEY=your-api-key
   ```

3. Run the application: `npm start`

#### Features:

- Image fetching from Unsplash API.
- Dynamic search functionality.
- Drag-and-drop reordering of images.

#### Project Structure:

- **src/components/PictureList:** Main component for image display and search.
- **src/components/SearchBox:** Component for handling user input and triggering searches.
- **src/hooks/usePictureData:** Custom hook for fetching image data.

#### How to Contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Submit a pull request.

6. [React Basics](https://reactjs.org/docs/getting-started.html)
7. [react-beautiful-dnd Documentation](https://github.com/atlassian/react-beautiful-dnd)
8. [Axios Documentation](https://axios-http.com/docs/intro)
