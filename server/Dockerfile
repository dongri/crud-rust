FROM rust

ADD . /source
WORKDIR /source

RUN cargo build

CMD cargo run
EXPOSE 3001
