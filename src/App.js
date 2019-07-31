import React, { Component } from 'react';
import "semantic-ui-css/semantic.min.css";
import { Button, Segment, Grid, Icon, Search, Table, Label, Menu, Feed, Image, Comment, Header, Form } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <Segment.Group>
        <Grid textAlign='center'>
          <Grid.Column style={{ maxWidth:900}}>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell textAlign="right" colSpan="3">
                    {" "}
                    <Search placeholder="Search document..." />
                  </Table.HeaderCell>
                </Table.Row>
                <Table.Row>
                  <Table.HeaderCell>Nama Dokumen</Table.HeaderCell>
                  <Table.HeaderCell>Jenis File</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell positive>
                    <Label ribbon>Panduan Belajar Javascript</Label>
                  </Table.Cell>
                  <Table.Cell>PDF</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Panduan Belajar CSS</Table.Cell>
                  <Table.Cell>PDF</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Panduan Belajar React JS</Table.Cell>
                  <Table.Cell>PDF</Table.Cell>
                </Table.Row>
              </Table.Body>

              <Table.Footer>
                <Table.Row>
                  <Table.HeaderCell colSpan='3'>
                    <Menu floated='right'pagination>
                      <Menu.Item as='a'>
                        <Icon name='chevron left' />
                      </Menu.Item>
                      <Menu.Item as='a'>1</Menu.Item>
                      <Menu.Item as='a'>2</Menu.Item>
                      <Menu.Item as='a'>3</Menu.Item>
                      <Menu.Item as='a'>4</Menu.Item>
                      <Menu.Item as='a'>
                        <Icon name='chevron right' />
                      </Menu.Item>
                    </Menu>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Footer>
            </Table>
          </Grid.Column>
        </Grid>

        <Grid container columns={3}>
          <Grid.Column width={2}>
          </Grid.Column>

          <Grid.Column width={7}>
            <Comment.Group>
              <Header as='h3' dividing>
                Komentar
              </Header>
              <Comment>
                <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
                <Comment.Content>
                  <Comment.Author as='a'>Satria</Comment.Author>
                  <Comment.Metadata>
                    <div>Friday at 05:42PM</div>
                  </Comment.Metadata>
                  <Comment.Text>
                    <p>Hallo...!</p>
                  </Comment.Text>
                  <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>

              <Comment>
                <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                <Comment.Content>
                  <Comment.Author as='a'>Danang</Comment.Author>
                  <Comment.Metadata>
                    <div>Today at 05:50PM</div>
                  </Comment.Metadata>
                  <Comment.Text>
                    <p>Kerjakan sesuatu semampu kamu..</p>
                  </Comment.Text>
                  <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                  </Comment.Actions>
                </Comment.Content>
                <Comment.Group>
                  <Comment>
                    <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
                    <Comment.Content>
                      <Comment.Author as='a'>Ricky</Comment.Author>
                      <Comment.Metadata>
                        <div>Just now</div>
                      </Comment.Metadata>
                      <Comment.Text>Kamu sekarang dimana Danang ?</Comment.Text>
                      <Comment.Actions>
                        <Comment.Action>Reply</Comment.Action>
                      </Comment.Actions>
                    </Comment.Content>
                  </Comment>
                </Comment.Group>
              </Comment>

              <Comment>
                <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
                <Comment.Content>
                  <Comment.Author as='a'>Joe</Comment.Author>
                  <Comment.Metadata>
                    <div>1 day ago</div>
                  </Comment.Metadata>
                  <Comment.Text>Terima kasih atas nasihatnya</Comment.Text>
                  <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>

              <Form reply>
                <Form.TextArea />
                <Button content='Add Reply' labelPosition='left' icon='edit' primary />
              </Form>

            </Comment.Group>
          </Grid.Column>

          <Grid.Column width={7}>
            <Feed>
              <Feed.Event>
                <Feed.Label>
                  <Image src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" alt='anton' />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Summary>
                    <Feed.User>Anton</Feed.User>added you as a friend
                    <Feed.Date>1 Hour Ago</Feed.Date>
                  </Feed.Summary>
                  <Feed.Meta>
                    <Feed.Like>
                      <Icon name='like' />
                      4 Likes
                    </Feed.Like>
                  </Feed.Meta>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label>
                  <Icon name='pencil' />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Summary>
                    You submitted a new post to the page
                    <Feed.Date>3 days ago</Feed.Date>
                  </Feed.Summary>
                  <Feed.Extra text>Saya Senang Belajar Bahas Pemrograman</Feed.Extra>
                  <Feed.Meta>
                    <Feed.Like>11 Likes</Feed.Like>
                  </Feed.Meta>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
                <Feed.Content>
                  <Feed.Date>4 days agog</Feed.Date>
                  <Feed.Summary><a>David</a> added <a>2 new illustrations</a>
                  </Feed.Summary>
                    <Feed.Extra images>
                    <a>
                      <img src='https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png' alt='Niomic'/>
                    </a>
                    <a>
                      <img src='https://cdn-images-1.medium.com/max/1600/1*6kK9j74vyOmXYm1gN6ARhQ.png' alt='React JS' />
                    </a>
                  </Feed.Extra>
                  <Feed.Meta>
                    <Feed.Like>
                      <Icon name='like' />
                      2 Likes
                    </Feed.Like>
                  </Feed.Meta>
                </Feed.Content>
              </Feed.Event>
            </Feed>
          </Grid.Column>

        </Grid>

      </Segment.Group>
    );
  }
}

export default App;
