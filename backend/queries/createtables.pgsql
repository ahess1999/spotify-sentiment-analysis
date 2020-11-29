CREATE TABLE Users (
    UserId INT NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    Username  VARCHAR NOT NULL UNIQUE,
    Password VARCHAR NOT NULL,
    CreatedOn TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UpdatedOn TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE UserPlaylists (
    UserId INT NOT NULL FOREIGN KEY REFERENCES Users(UserId),
    PlaylistName VARCHAR NOT NULL UNIQUE,
    --Will need to serialize before importing into the database and deserialize once it is out of the database
    Songlist text NOT NULL,
    CreatedOn DATETIMEOFFSET NOT NULL DEFAULT(SYSDATETIME()),
    UpdatedOn DATETIMEOFFSET NOT NULL DEFAULT(SYSDATETIME())
);