function NotFound(): JSX.Element {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <p style={{ fontSize: '50px', margin: 0 }}>404 Not Found</p>
      <a href="/#">
        <p style={{ fontSize: '20px', color: 'blue' }}>На главную</p>
      </a>
    </div>
  );
}

export default NotFound;
