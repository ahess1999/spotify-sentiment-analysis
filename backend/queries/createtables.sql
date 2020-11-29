CREATE TABLE Users (
    UserId INT NOT NULL IDENTITY(1, 1) PRIMARY KEY,
    Username  VARCHAR NOT NULL,
    [Password] VARCHAR NOT NULL,
    CreatedOn DATETIMEOFFSET NOT NULL DEFAULT(SYSDATETIME()),
    UpdatedOn DATETIMEOFFSET NOT NULL DEFAULT(SYSDATETIME())
    UNIQUE 
    (
        Username
    )
);

CREATE TABLE UserPlaylists (
    UserId INT NOT NULL FOREIGN KEY REFERENCES Users(UserId),
    PlaylistName VARCHAR NOT NULL,
    --Will need to serialize before importing into the database and deserialize once it is out of the database
    Songlist VARCHAR NOT NULL,
    CreatedOn DATETIMEOFFSET NOT NULL DEFAULT(SYSDATETIME()),
    UpdatedOn DATETIMEOFFSET NOT NULL DEFAULT(SYSDATETIME())
    UNIQUE 
    (
        PlaylistName
    )
);